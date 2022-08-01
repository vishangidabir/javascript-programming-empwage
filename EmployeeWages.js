console.log("Welcome to Employee Wage Program !");
//UC7-->Storing The Daily Wage in a Array
{
    const MAXIMUM_WORKING_DAYS = 20;
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const MAX_HOURS_IN_MONTH = 160;
    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    function calDailyWage(emphr) {
        return emphr * WAGE_PER_HOUR;
    }
    let totalEmpHr = 0;
    let totalWorkingDays = 0;
    let emolpoyeeDailyWageArr = new Array();
    while (totalEmpHr <= MAX_HOURS_IN_MONTH && totalWorkingDays < MAXIMUM_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 3);
        let empHr = getWorkingHours(empCheck)
        totalEmpHr += empHr;
        emolpoyeeDailyWageArr.push(calDailyWage(empHr));
    }
    //7a-->Using ForEach method print the Output
    let totalEmpWage = 0;
    function sum(dailyWage) {
        totalEmpWage += dailyWage;
    }
    emolpoyeeDailyWageArr.forEach(sum);
    console.log("UC7a-ForEach method-> Total Days :" + totalWorkingDays + " Total Hours :" + totalEmpHr + " Employee Wage " + totalEmpWage);

    //7a-->using reduse Method to print the result 
    function totalWages(totalEmpWage, dailyWage) {
        return totalEmpWage + dailyWage;
    }
    console.log("UC7a-reduse Method-> Total Days :" + emolpoyeeDailyWageArr.reduce(totalWages, 0));

    //7b-->Show the day along with daily wage using array map helper function
    let dailyCount = 0;
    function mapDayWithWage(dailyWage) {
        dailyCount++;
        return dailyCount + " = " + dailyWage;
    }
    let mapDayWithWageArr = emolpoyeeDailyWageArr.map(mapDayWithWage);
    console.log("UC7b-->Map Daily Wage is :" + mapDayWithWageArr);

    // 7c-->Show Day when fulltime wage of 160 were earned
    function fullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
    console.log("Uc7c-->Daily wage Filet only 160 earned days print : " + fullDayWageArr);

    // 7D -->Find the first Occurance when full time wage was earned
    function findFullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("Uc7D-->first time fulltime wage was earned day is :" + mapDayWithWageArr.find(findFullTimeWage));

    //UC7E--> Check if Every Element of full time wage is truly Holding full time Wage

    function allFullTimeWages(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC7E-->Check all the fullTime Wages :" + fullDayWageArr.every(allFullTimeWages));

    //UC7F-->Check if there is any Part time wage 
    function anyPartTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }
    console.log("UC7F-->Check if any part time :" + mapDayWithWageArr.some(anyPartTimeWage));
    
    // UC7G-->Find the number Of day employee Worked
    function totalDaysWorkde(numberOfDays, dailyWage) {
        if (dailyWage > 0)
            return numberOfDays + 1;
        return numberOfDays;
    }
    console.log("Uc7G-->Number of days Employee Worked :" + emolpoyeeDailyWageArr.reduce(totalDaysWorkde, 0));
}






