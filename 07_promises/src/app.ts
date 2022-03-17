// we will consume data from the API at https://dummy.restapiexample.com/api/v1/employees

{
    // an interface
    interface Employee {
        id:number
        employee_name:string
        employee_salary:number
        employee_age:number
        profile_image:string
    }

    // a method to fetch the data
    //                                or  <Employee[]> // try without | string
    const fetchEmployees = async ():Promise<Array<Employee> | string>=>{
        const api = 'https://dummy.restapiexample.com/api/v1/employees'
        try { //          async/await ensures we wait for a Promise to be resolved
            const response = await fetch(api) // fetch defaults to using 'get'
            console.log(`${response}, ${typeof(response)}`)
            const {data} = await response.json() // we want the JSON part of the response
            console.log(`${data}, ${typeof(data)}`)
            return data // this is now an array of employee data members as an Object
        }
        catch (error) {
            if (error) {
                return error.message // this API will return a message as a Promise
            }
        }
    }

    // exercise the code
    fetchEmployees().then( (d)=>{ // the .then resolves the incoming Promise
        console.log(`${typeof(d)}`)
        console.log(`promise returned ${d}`)
        console.log(`Member zero is  ${d[0]['employee_name']}`)
    } )

}