import React from 'react'
import { wixClientServer } from '@/lib/wixClientServer'
import { members } from '@wix/members';
import Link from 'next/link';
import { format } from 'timeago.js';
import UpdateButton from '@/components/UpdateButton';
import { UpdateUser } from '@/lib/actions';

const ProfilePage = async () => {

    const wixClient = await wixClientServer();

    const user = await wixClient.members.getCurrentMember({
        fieldsets: [members.Set.FULL],
    });

    if (!user.member?.contactId) {
        return <div className=''>Not logged in?</div>
    }

    const orderRes = await wixClient.orders.searchOrders({
        search: {
            filter: { 'buyerInfo.contactId': { $eq: user.member?.contactId } }
        }
    });

    return (
        <div className='mt-12 flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-2xl'>Profile</h1>
                <form action={UpdateUser} className="mt-12 flex flex-col gap-4">
                    <input type="text" hidden name="id" value={user.member.contactId} />
                    <label className="text-sm text-gray-700">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder={user.member?.profile?.nickname || 'username'}
                        className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
                    />
                    <label className="text-sm text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder={user.member?.contact?.firstName || 'Joel'}
                        className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
                    />
                    <label className="text-sm text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder={user.member?.contact?.lastName || 'Miller'}
                        className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
                    />
                    <label className="text-sm text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder={user.member?.contact?.phones && user.member?.contact?.phones[0] || '+91 886 523 8962'}
                        className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
                    />
                    <label className="text-sm text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder={user.member?.loginEmail || 'Zombie@gmail.com'}
                        className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
                    />
                    <UpdateButton />
                </form>
            </div>
            <div className='w-full md:w-1/2'>
                <h1 className='text-2xl'>Orders</h1>
                <div className='mt-12 flex flex-col'>
                    {
                        orderRes.orders.map((order) => (
                            <Link href={`/orders/${order._id}`} key={order._id} className='flex justify-between px-2 py-6 rounded-md hover:bg-green-50 even:bg-slate-100'>
                                <span className='w-1/4'>{order._id?.substring(0, 10)}...</span>
                                <span className='w-1/4'>{order.priceSummary?.subtotal?.amount}</span>
                                {order._createdDate && (
                                    <span className="w-1/4">{format(order._createdDate)}</span>
                                )}
                                <span className='w-1/4'>{order.status}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfilePage