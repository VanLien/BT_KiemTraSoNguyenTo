function checkPrime(number)
{
    if (number<2)
    {
        return false;
    }
    else
    {
        for (let i=2; i<number-1; i++)
        {
            if (number%i==0)
            {
                return false;
            }
        }
        return true;
    }
}
let input=parseInt(prompt("Số Cần Kiểm Tra"));
    if (checkPrime(input)){
        alert(input+" La So Nguyen To");
    } else {
        alert(input+" K Phai La nguyento");
    }
