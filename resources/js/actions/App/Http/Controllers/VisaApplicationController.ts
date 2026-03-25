import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\VisaApplicationController::index
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/apply-visa',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisaApplicationController::index
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisaApplicationController::index
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::index
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::index
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::index
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::index
* @see app/Http/Controllers/VisaApplicationController.php:30
* @route '/apply-visa'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

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
* @see \App\Http\Controllers\VisaApplicationController::verifyPassportData
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
export const verifyPassportData = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPassportData.url(options),
    method: 'post',
})

verifyPassportData.definition = {
    methods: ["post"],
    url: '/apply-visa/verify-passport',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VisaApplicationController::verifyPassportData
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
verifyPassportData.url = (options?: RouteQueryOptions) => {
    return verifyPassportData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisaApplicationController::verifyPassportData
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
verifyPassportData.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyPassportData.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::verifyPassportData
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
const verifyPassportDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPassportData.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::verifyPassportData
* @see app/Http/Controllers/VisaApplicationController.php:68
* @route '/apply-visa/verify-passport'
*/
verifyPassportDataForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyPassportData.url(options),
    method: 'post',
})

verifyPassportData.form = verifyPassportDataForm

/**
* @see \App\Http\Controllers\VisaApplicationController::checkStatus
* @see app/Http/Controllers/VisaApplicationController.php:168
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
* @see app/Http/Controllers/VisaApplicationController.php:168
* @route '/apply-visa/check-status'
*/
checkStatus.url = (options?: RouteQueryOptions) => {
    return checkStatus.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisaApplicationController::checkStatus
* @see app/Http/Controllers/VisaApplicationController.php:168
* @route '/apply-visa/check-status'
*/
checkStatus.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkStatus.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::checkStatus
* @see app/Http/Controllers/VisaApplicationController.php:168
* @route '/apply-visa/check-status'
*/
const checkStatusForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkStatus.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::checkStatus
* @see app/Http/Controllers/VisaApplicationController.php:168
* @route '/apply-visa/check-status'
*/
checkStatusForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkStatus.url(options),
    method: 'post',
})

checkStatus.form = checkStatusForm

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:156
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
* @see app/Http/Controllers/VisaApplicationController.php:156
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
* @see app/Http/Controllers/VisaApplicationController.php:156
* @route '/apply-visa/{reference}/pdf'
*/
downloadPdf.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:156
* @route '/apply-visa/{reference}/pdf'
*/
downloadPdf.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadPdf.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:156
* @route '/apply-visa/{reference}/pdf'
*/
const downloadPdfForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:156
* @route '/apply-visa/{reference}/pdf'
*/
downloadPdfForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadPdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisaApplicationController::downloadPdf
* @see app/Http/Controllers/VisaApplicationController.php:156
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

const VisaApplicationController = { index, store, uploadPassport, verifyPassportData, checkStatus, downloadPdf }

export default VisaApplicationController