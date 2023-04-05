export const objectToQuerystring = (object: any): string => {
  let params = ''
  for (const key in object) {
    params += `${key}=${object[key]}&`
  }
  if (params.substring(params.length - 1) === '&') {
    params = params.substring(0, params.length - 1)
  }
  return params
}
