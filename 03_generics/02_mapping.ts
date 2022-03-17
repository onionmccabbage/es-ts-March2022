namespace Options_Verbose {
    interface Options {
        material:string
        backlight:boolean
    }
    // read-only version
    interface ManualReadOnlyOptions {
        readonly material:string
        readonly backlight:boolean
    }
    // optional version
    interface ManualOptionalOptions {
        material?:string // the trailing question-mark makes that parameter optional
        backlight?:boolean
    }
    // read-only version
    interface ManualNullableOptions {
        material:string | null
        backlight:boolean | null
    }
}

namespace Options_Terse {
    interface Options {
        material:string
        backlight:boolean
    }    
    // use mapped generic types
    type ReadOnlyOptions<T> = { readonly [k in keyof T]: T[k] }
    type OptionalOptions<T> = { [k in keyof T]?: T[k] }
    type NullableOptions<T> = { [k in keyof T]: T[k] | null }

    // exercise the code
    type ReadOnly = ReadOnlyOptions<Options>
    type Optional = OptionalOptions<Options>
    type Nullable = NullableOptions<Options>

    const brick:ReadOnly = {
        backlight:false,
        material:null // this will become a string thereby matching the material type
    }
    // brick.backlight = true // nope - readonly
    const gauze:Nullable | Error = {
        backlight:true,
        material:null
    }
    const silk:Optional = {
        backlight:true
    }

}