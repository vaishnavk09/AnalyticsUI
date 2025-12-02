import React, { useState } from 'react';
import { Download, Filter, Eye, MoreHorizontal, ArrowUpDown, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { clsx } from 'clsx';

const reportsData = [
    { id: 'R-001', name: 'Q3 Revenue Analysis', type: 'Financial', date: '2023-10-15', status: 'Completed', author: 'Alex Morgan' },
    { id: 'R-002', name: 'User Engagement Report', type: 'Analytics', date: '2023-10-14', status: 'Processing', author: 'Sarah Chen' },
    { id: 'R-003', name: 'System Performance Log', type: 'Technical', date: '2023-10-13', status: 'Failed', author: 'Mike Ross' },
    { id: 'R-004', name: 'Marketing Campaign ROI', type: 'Marketing', date: '2023-10-12', status: 'Completed', author: 'Jessica Pearson' },
    { id: 'R-005', name: 'Inventory Turnover', type: 'Operations', date: '2023-10-11', status: 'Completed', author: 'Louis Litt' },
    { id: 'R-006', name: 'Customer Satisfaction', type: 'Support', date: '2023-10-10', status: 'Completed', author: 'Donna Paulsen' },
    { id: 'R-007', name: 'Website Traffic Analysis', type: 'Analytics', date: '2023-10-09', status: 'Processing', author: 'Rachel Zane' },
];

const Reports = () => {
    const [selectedReport, setSelectedReport] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewReport = (report) => {
        setSelectedReport(report);
        setIsModalOpen(true);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400';
            case 'Processing': return 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400';
            case 'Failed': return 'text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-400';
            default: return 'text-slate-600 bg-slate-50';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Completed': return <CheckCircle size={14} className="mr-1.5" />;
            case 'Processing': return <AlertCircle size={14} className="mr-1.5" />;
            case 'Failed': return <XCircle size={14} className="mr-1.5" />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Reports Center</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage and export your analytics reports.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Filter size={16} /> Filter
                    </Button>
                    <Button className="gap-2">
                        <Download size={16} /> Export All
                    </Button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Report Name</th>
                                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Type</th>
                                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-600 transition-colors">
                                        Date Created <ArrowUpDown size={14} />
                                    </div>
                                </th>
                                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Author</th>
                                <th className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {reportsData.map((report, index) => (
                                <motion.tr
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    key={report.id}
                                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{report.name}</td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{report.type}</td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{report.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', getStatusColor(report.status))}>
                                            {getStatusIcon(report.status)}
                                            {report.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{report.author}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleViewReport(report)}
                                                className="p-2 text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-lg transition-colors"
                                                title="View Details"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Showing 1-7 of 24 results</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Report Details"
            >
                {selectedReport && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Report ID</p>
                                <p className="font-mono font-medium text-slate-900 dark:text-white">{selectedReport.id}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-slate-500 dark:text-slate-400">Generated On</p>
                                <p className="font-medium text-slate-900 dark:text-white">{selectedReport.date}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Summary</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    This report contains a detailed analysis of {selectedReport.name.toLowerCase()}.
                                    It includes key performance indicators, trend analysis, and actionable insights derived from the data collected over the specified period.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Key Metrics</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Total Views</p>
                                        <p className="text-lg font-bold text-slate-900 dark:text-white">12,543</p>
                                    </div>
                                    <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Conversion Rate</p>
                                        <p className="text-lg font-bold text-slate-900 dark:text-white">3.2%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Close</Button>
                            <Button className="gap-2">
                                <Download size={16} /> Download PDF
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Reports;
