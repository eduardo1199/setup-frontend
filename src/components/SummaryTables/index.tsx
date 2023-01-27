import { generateRangeFromYearBeginning } from "../../utils/generate-range-from-year-beginnig";
import { HabitDay } from "./HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateRangeFromYearBeginning();

const minimumSummaryDatesSizes = 18 * 7; // 18 semanas
const amountOfDatesToFill = minimumSummaryDatesSizes - summaryDates.length;

export function SummaryTables() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
       {weekDays.map((weekDay, index) => {
        return (
            <div key={`${weekDay}-${index}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
              {weekDay}
            </div>
          )
       })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((summaryDate, index) => {
          return (
            <HabitDay 
              key={summaryDate.toString()} 
              completed={8} 
              amount={10} 
            />
          )
        })}

        {amountOfDatesToFill > 0 && Array.from({ length: amountOfDatesToFill }).map((_, index) => {
          return (
            <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
          )
        })}
      </div>
    </div>
  )
}