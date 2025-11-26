import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { deviceData } from '../../data/dummyCharts';

const COLORS = ['#06b6d4', '#2563eb', '#ec4899'];

const PieChart = () => {
    return (
        <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                    <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#1e293b' }}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </RechartsPieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChart;
