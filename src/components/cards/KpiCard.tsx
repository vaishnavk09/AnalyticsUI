
import { type LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { clsx } from 'clsx';

interface KpiCardProps {
    title: string;
    value: string;
    trend: number;
    icon: LucideIcon;
    color: 'indigo' | 'emerald' | 'amber' | 'rose';
}

const KpiCard = ({ title, value, trend, icon: Icon, color }: KpiCardProps) => {
    const colorStyles = {
        indigo: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400',
        emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
        amber: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
        rose: 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400',
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{value}</h3>
                </div>
                <div className={clsx('p-2 rounded-lg', colorStyles[color])}>
                    <Icon size={20} />
                </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <span
                    className={clsx(
                        'flex items-center text-xs font-medium px-2 py-0.5 rounded-full',
                        trend >= 0
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400'
                            : 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400'
                    )}
                >
                    {trend >= 0 ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
                    {Math.abs(trend)}%
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">vs last month</span>
            </div>
        </div>
    );
};

export default KpiCard;
