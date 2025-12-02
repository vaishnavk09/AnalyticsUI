import React, { useState } from 'react';
import { Plus, GripVertical, Trash2, ArrowRight, Play, CheckCircle2, Save } from 'lucide-react';
import { motion, Reorder } from 'framer-motion';
import Button from '../components/ui/Button';
import { clsx } from 'clsx';



const initialSteps = [
    { id: '1', title: 'Fetch Data', description: 'Retrieve daily sales data from API', type: 'trigger' },
    { id: '2', title: 'Process Analytics', description: 'Calculate KPIs and trends', type: 'action' },
    { id: '3', title: 'Check Thresholds', description: 'Verify if targets are met', type: 'condition' },
    { id: '4', title: 'Generate Report', description: 'Create PDF summary', type: 'action' },
];

const Workflows = () => {
    const [steps, setSteps] = useState(initialSteps);

    const addStep = () => {
        const newStep = {
            id: Date.now().toString(),
            title: 'New Step',
            description: 'Configure this step...',
            type: 'action',
        };
        setSteps([...steps, newStep]);
    };

    const removeStep = (id) => {
        setSteps(steps.filter((step) => step.id !== id));
    };

    const getStepColor = (type) => {
        switch (type) {
            case 'trigger': return 'bg-cyan-50 border-cyan-200 dark:bg-cyan-900/20 dark:border-cyan-800';
            case 'action': return 'bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700';
            case 'condition': return 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800';
            default: return 'bg-white border-slate-200';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Workflow Builder</h1>
                    <p className="text-slate-500 dark:text-slate-400">Design and automate your analytics pipelines.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Play size={16} /> Test Run
                    </Button>
                    <Button className="gap-2">
                        <Save size={16} /> Save Workflow
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <Reorder.Group axis="y" values={steps} onReorder={setSteps} className="space-y-4">
                        {steps.map((step, index) => (
                            <Reorder.Item key={step.id} value={step}>
                                <div className="relative flex items-center">
                                    <div className="absolute left-8 top-full h-4 w-0.5 bg-slate-300 dark:bg-slate-700 -translate-x-1/2 z-0 last:hidden" />

                                    <div className={clsx(
                                        'relative z-10 w-full flex items-center gap-4 p-4 rounded-xl border shadow-sm transition-shadow hover:shadow-md cursor-move',
                                        getStepColor(step.type)
                                    )}>
                                        <div className="text-slate-400 cursor-grab active:cursor-grabbing">
                                            <GripVertical size={20} />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{step.type}</span>
                                                <h3 className="font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                                            </div>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                                        </div>

                                        <button
                                            onClick={() => removeStep(step.id)}
                                            className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 z-0 text-slate-300 dark:text-slate-600">
                                            <ArrowRight size={16} className="rotate-90" />
                                        </div>
                                    )}
                                </div>
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>

                    <button
                        onClick={addStep}
                        className="w-full py-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-500 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                        <Plus size={20} /> Add Step
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Workflow Status</h3>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                <span className="text-slate-600 dark:text-slate-400">All triggers configured</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                <span className="text-slate-600 dark:text-slate-400">Data sources connected</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                <span className="text-slate-600 dark:text-slate-400">Permissions verified</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                            <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Estimated Runtime</h4>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">~45s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workflows;
