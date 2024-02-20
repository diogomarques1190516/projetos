using System.Globalization;
using System;
namespace WarehouseManagement.Domain.Shared;
 public static class DateParser
{
    private static string format = "dd-MM-yyyy";
    public static DateTime fromString(string date)
        {
            DateTime parsedDate;
            if (DateTime.TryParseExact(date, format, null,
                                      DateTimeStyles.None, out parsedDate))
                return parsedDate;
            else
                throw new BusinessRuleValidationException("Unable to convert "+date+" to a date.");
        }
        
    public static string toString(DateTime date){
        return date.ToString(format);
    }
}
