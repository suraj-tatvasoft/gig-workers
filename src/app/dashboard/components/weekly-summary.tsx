'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const weeklyData = [
  {
    date: 'Mon, Dec 23 2024',
    gig: 'Tutoring - Calculus II Help',
    tier: 'Tier 3: Expert',
    hours: '2:30',
    amount: '$75',
    status: 'Completed',
  },
  {
    date: 'Tue, Dec 24 2024',
    gig: 'Laundry Service & Dorm Cleaning',
    tier: 'Tier 1: Basic',
    hours: '1:45',
    amount: '$25',
    status: 'Completed',
  },
  {
    date: 'Wed, Dec 25 2024',
    gig: 'Resume Review & Career Advice',
    tier: 'Tier 2: Advanced',
    hours: '1:00',
    amount: '$40',
    status: 'In Progress',
  },
];

export function WeeklySummary() {
  return (
    <div className="backdrop-blur-xl rounded-2xl p-6 shadow-none border border-slate-700/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Gigs</h3>
      </div>

      <div className="overflow-x-auto">
        <Table className="min-w-full !border-slate-700/50 border-spacing-2">
          <TableHeader>
            <TableRow className="border-b !border-slate-700/50">
              <TableHead className="text-white text-md font-semibold">Gig Details</TableHead>
              <TableHead className="text-white text-md font-semibold">Hours</TableHead>
              <TableHead className="text-white text-md font-semibold">Earnings</TableHead>
              <TableHead className="text-white text-md font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {weeklyData.map((item, index) => (
              <TableRow key={index} className="border-b border-slate-700/50 hover:bg-slate-700/10">
                <TableCell className="py-3">
                  <div className="text-sm text-slate-400 mb-1">{item.date}</div>
                  <div className="text-sm font-medium text-white">{item.gig}</div>
                  <div className="text-xs text-blue-400">{item.tier}</div>
                </TableCell>
                <TableCell className="py-3 text-sm text-slate-400">{item.hours}</TableCell>
                <TableCell className="py-3 text-sm font-semibold text-white">{item.amount}</TableCell>
                <TableCell className="py-3">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Completed'
                        ? 'bg-green-900/50 text-green-400 border border-green-700/50'
                        : 'bg-yellow-900/50 text-yellow-400 border border-yellow-700/50'
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
