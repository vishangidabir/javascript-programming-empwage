console.log("Welcome to Employee Wage Program !");
//UC4-->Calculating Wages for Month
{
    const NUM_OF_WORKING_DAYS=20;
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
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
    let empHr=0;
    for(let day =0;day<NUM_OF_WORKING_DAYS;day++){
        let empCheck=Math.floor(Math.random()*3);
        empHr+=getWorkingHours(empCheck);
    }
    let empWage=empHr*WAGE_PER_HOUR;
    console.log("Total Hours "+empHr+" Employee Wage is :"+empWage);
}



