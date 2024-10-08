import { cn } from "../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  
 
}) => {
  return (
    <div
      className={cn(
        "flex flex-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black  border border-transparent justify-between flex flex-col space-y-4",
       className
      )}
    >
      {header}
      <div className="flex-shrink">
        <div>
          
        </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs text-white mb-4">
          {description}
        </div>
      </div>
     
    </div>

  );
};
