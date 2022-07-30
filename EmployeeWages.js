console.log("Welcome to Employee Wage Program !");
//UC5-->Calculating Wages Still condition Reached
{
    const MAXIMUM_WORKING_DAYS=20;
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    const MAX_HOURS_IN_MONTH=100;
    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    let totalEmpHr=0;
    let totalWorkingDays=0;
    while(totalEmpHr<=MAX_HOURS_IN_MONTH && totalWorkingDays<MAXIMUM_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()*3);
        totalEmpHr+=getWorkingHours(empCheck);
    }
    let empWage=totalEmpHr * WAGE_PER_HOUR;
    console.log("UC5--> Total Days :"+totalWorkingDays+" Total Hours :"+totalEmpHr+" EmployeeWage is : "+empWage);
}



