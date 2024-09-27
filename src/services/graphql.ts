/* 
const gqlURL = "https://strapi.iamet.cbluna-dev.com/graphql";
export const strapiURL = "https://strapi.iamet.cbluna-dev.com";

export async function GQLQuery (query:string) {
    const resp  = await fetch(gqlURL,{
        method:"POST",
        cache:"no-cache",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({query}),
    })
    return await resp.json();
}
export async function getPageData(query:string, getLayoutData:boolean=true){
    let layoutData ={};
    if(getLayoutData){
        //layoutData = await GQLQuery(LayoutQuery());
    }
    const pageData = await GQLQuery(query);

    return {
        layoutData,
        pageData
    }
} */