import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '../../data/dummyCharts';

const BarChart = () => {
    return (
        <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                        cursor={{ fill: '#f1f5f9' }}
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#1e293b' }}
                    />
                    <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={40} />
                </RechartsBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChart;
