import { useEffect } from "react";
import { useState } from "react";

function BlogCards(){
    const [BlogList, SetBlogList] = useState([]);

    useEffect(() => {
        if(BlogList.length === 0){
            const fetchBlogsList = async () =>{
                let response  = await fetch(`https://ak-fe-assessment-mock-api.herokuapp.com/blogs`);
                let data = await response.json();
                console.log(data);
                SetBlogList(data)
            }
           fetchBlogsList().catch(console.error);
        }
    },[BlogList])

    return(<>
       <RenderBlogCards BlogArray={BlogList}/>
    </>);

    
}

function RenderBlogCards(BlogArray) {
    if(BlogArray.length > 0){
        console.log(BlogArray);
    return(<>
        {BlogArray.forEach((Blog) =>(
            <BlogCard>{Blog}</BlogCard>
        )
        )}
    </>);
    }
    return(<></>);
}

function BlogCard(BlogCardJson) {
    return(<>
    <title>{BlogCardJson.title}</title>
    <image>{BlogCardJson.imageUrl}</image>
    <text>{BlogCardJson.authorName}</text>
    <text>{BlogCardJson.publishedDate}</text>
    </>);
}

/*async function FetchBlogById(id) {
    let response = await fetch(`https://ak-fe-assessment-mock-api.herokuapp.com/blogs/${id}`);
    let data = await response.json();
    return data;
}*/

export default BlogCards;