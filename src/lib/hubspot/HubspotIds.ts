export enum NameToFormId {
  newsletter = '0ba34fad-afcf-4dde-8b51-b73c32c9595c',
  contactus = 'fc7c232e-cab9-4eb5-822e-5d0c0d3d2714',
  kuppingercoleReport = 'b5d9557c-5aa3-45fe-a882-cdfc9836c26b'
}

export const getFormNameFromId = (formId: string) => {
  return Object.entries(NameToFormId).find((e) => e[1] === formId)?.[0]
}
