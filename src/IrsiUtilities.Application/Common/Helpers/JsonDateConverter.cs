using Newtonsoft.Json.Converters;

namespace IrsiUtilities.Application.Common.Helpers
{
    public class JsonDateConverter : IsoDateTimeConverter
    {
        public JsonDateConverter()
        {
            DateTimeFormat = "yyyy-MM-dd";
        }
    }
}