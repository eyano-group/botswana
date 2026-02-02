import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\VisaApplicationController::apply
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
export const apply = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apply.url(options),
    method: 'get',
})

apply.definition = {
    methods: ["get","head"],
    url: '/apply-visa',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisaApplicationController::apply
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
apply.url = (options?: RouteQueryOptions) => {
    return apply.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisaApplicationController::apply
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
apply.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apply.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::apply
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
apply.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apply.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::apply
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
const applyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apply.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::apply
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
applyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apply.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::apply
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
applyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apply.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apply.form = applyForm

/**
* @see \App\Http\Controllers\VisaApplicationController::store
* @see app/Http/Controllers/VisaApplicationController.php:86
* @route '/apply-visa'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/apply-visa',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VisaApplicationController::store
* @see app/Http/Controllers/VisaApplicationController.php:86
* @route '/apply-visa'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisaApplicationController::store
* @see app/Http/Controllers/VisaApplicationController.php:86
* @route '/apply-visa'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::store
* @see app/Http/Controllers/VisaApplicationController.php:86
* @route '/apply-visa'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::store
* @see app/Http/Controllers/VisaApplicationController.php:86
* @route '/apply-visa'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\VisaApplicationController::uploadPassport
* @see app/Http/Controllers/VisaApplicationController.php:40
* @route '/apply-visa/upload-passport'
*/
export const uploadPassport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPassport.url(options),
    method: 'post',
})

uploadPassport.definition = {
    methods: ["post"],
    url: '/apply-visa/upload-passport',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VisaApplicationController::uploadPassport
* @see app/Http/Controllers/VisaApplicationController.php:40
* @route '/apply-visa/upload-passport'
*/
uploadPassport.url = (options?: RouteQueryOptions) => {
    return uploadPassport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisaApplicationController::uploadPassport
* @see app/Http/Controllers/VisaApplicationController.php:40
* @route '/apply-visa/upload-passport'
*/
uploadPassport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadPassport.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::uploadPassport
* @see app/Http/Controllers/VisaApplicationController.php:40
* @route '/apply-visa/upload-passport'
*/
const uploadPassportForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPassport.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::uploadPassport
* @see app/Http/Controllers/VisaApplicationController.php:40
* @route '/apply-visa/upload-passport'
*/
uploadPassportForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadPassport.url(options),
    method: 'post',
})

uploadPassport.form = uploadPassportForm

/**
* @see \App\Http\Controllers\VisaApplicationController::verifyPassport
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
export const verifyPassport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPassport.url(options),
    method: 'post',
})

verifyPassport.definition = {
    methods: ["post"],
    url: '/apply-visa/verify-passport',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VisaApplicationController::verifyPassport
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
verifyPassport.url = (options?: RouteQueryOptions) => {
    return verifyPassport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisaApplicationController::verifyPassport
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
verifyPassport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPassport.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::verifyPassport
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
const verifyPassportForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPassport.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::verifyPassport
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
verifyPassportForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPassport.url(options),
    method: 'post',
})

verifyPassport.form = verifyPassportForm

/**
* @see \App\Http\Controllers\VisaApplicationController::checkStatus
* @see app/Http/Controllers/VisaApplicationController.php:162
* @route '/apply-visa/check-status'
*/
export const checkStatus = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkStatus.url(options),
    method: 'post',
})

checkStatus.definition = {
    methods: ["post"],
    url: '/apply-visa/check-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VisaApplicationController::checkStatus
* @see app/Http/Controllers/VisaApplicationController.php:162
* @route '/apply-visa/check-status'
*/
checkStatus.url = (options?: RouteQueryOptions) => {
    return checkStatus.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisaApplicationController::checkStatus
* @see app/Http/Controllers/VisaApplicationController.php:162
* @route '/apply-visa/check-status'
*/
checkStatus.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkStatus.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::checkStatus
* @see app/Http/Controllers/VisaApplicationController.php:162
* @route '/apply-visa/check-status'
*/
const checkStatusForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkStatus.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::checkStatus
* @see app/Http/Controllers/VisaApplicationController.php:162
* @route '/apply-visa/check-status'
*/
checkStatusForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkStatus.url(options),
    method: 'post',
})

checkStatus.form = checkStatusForm

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:150
* @route '/apply-visa/{reference}/pdf'
*/
export const downloadPdf = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadPdf.url(args, options),
    method: 'get',
})

downloadPdf.definition = {
    methods: ["get","head"],
    url: '/apply-visa/{reference}/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:150
* @route '/apply-visa/{reference}/pdf'
*/
downloadPdf.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return downloadPdf.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:150
* @route '/apply-visa/{reference}/pdf'
*/
downloadPdf.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:150
* @route '/apply-visa/{reference}/pdf'
*/
downloadPdf.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadPdf.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:150
* @route '/apply-visa/{reference}/pdf'
*/
const downloadPdfForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:150
* @route '/apply-visa/{reference}/pdf'
*/
downloadPdfForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:150
* @route '/apply-visa/{reference}/pdf'
*/
downloadPdfForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadPdf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadPdf.form = downloadPdfForm

const visa = {
    apply: Object.assign(apply, apply),
    store: Object.assign(store, store),
    uploadPassport: Object.assign(uploadPassport, uploadPassport),
    verifyPassport: Object.assign(verifyPassport, verifyPassport),
    checkStatus: Object.assign(checkStatus, checkStatus),
    downloadPdf: Object.assign(downloadPdf, downloadPdf),
}

export default visa