'use client';

import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

export function UserProfile() {
  return (
    <div className="h-full backdrop-blur-xl rounded-2xl p-6 shadow-none border border-slate-700/50">
      <div className="flex items-center space-x-4 mb-4">
        <img
          className="w-12 h-12 rounded-full ring-2 ring-blue-500/20"
          src="https://images.unsplash.com/profile-1704991443592-a7f79d25ffb1image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
          alt="Sarah Johnson"
        />
        <div>
          <h3 className="font-semibold text-white">Sarah Johnson</h3>
          <p className="text-sm text-slate-400">Pro Account • Computer Science</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Overall Rating</span>
            <span className="text-md font-semibold text-[#1cbae0]">4.8/5</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1">
            <div className="bg-[#1cbae0] h-1 rounded-full" style={{ width: '96%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Completion Rate</span>
            <span className="text-md font-semibold text-[#1cbae0]">98%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1">
            <div className="bg-[#1cbae0] h-1 rounded-full" style={{ width: '98%' }}></div>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="lg"
        className="cursor-pointer w-full mt-8 bg-foreground hover:bg-background/10 text-background border-slate-700/50"
      >
        <Link className="w-4 h-4" />
        View Public Profile
      </Button>
    </div>
  );
}
