import React from 'react'
import {useRouter} from "next/router";

function Post(props: any) {
    const {data} = props;
    const router = useRouter();
    const {id} = router.query;
    return <div>
        <h1>参数{id}</h1>
        <h1>数据：{data ? data.name : ''}</h1>
    </div>
}

export default Post

// build时执行
export async function getStaticProps(context: any) {
    const {id} = context.params;
    // const data = await fetch('http://localhost:3000/api/' + id).then(res => res.json())
    return {
        props: {
            data: {
                id: id,
                name: 'test' + id,
            }
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [{params: {id: '1'}}],
        fallback: 'blocking',
    }
}