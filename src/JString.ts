var edge = require('edge-js');

export class JString {
    static format(format:string, parameters:string[]):string {
        let result;
        var clrMethod = edge.func(`
                using System.Threading.Tasks;

                public class Startup
                {
                    public async Task<object> Invoke(dynamic input)
                    {
                        return string.Format(input.format, input.parameters);
                    }
                }
        `);

        clrMethod({format, parameters}, function(e, r) {
            if (e) throw e;
            result = r;
        });

        return result;
    }
}