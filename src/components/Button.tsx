import { ElementType } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  icon: ElementType
  text: string
}

export function Button({ icon: Icon, text }: ButtonProps) {
  return (
    <button type="button" className="flex justify-between items-center self-stretch p-4 rounded-2xl border-2 border-slate-700 bg-slate-900">
      <div className="flex items-center gap-6">
        <span className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <Icon className="w-8 h-8 flex items-start text-slate-200 rounded-2xl gap-6 border border-slate-800 bg-slate-900" />
        </span>
        <p className="text-slate-200 text-lg font-semibold">{text}</p>
      </div>
      <ArrowRight className="w-8 h-8 flex items-start text-slate-400" />
    </button>
  );
}
