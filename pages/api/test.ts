import {NextApiRequest, NextApiResponse} from "next";

interface TestProps {
    id: string;
    name: string;
}

export default function test(
    req: NextApiRequest,
    res: NextApiResponse<TestProps>
) {
    res.status(200).json({
        id: '1',
        name: 'test name'
    })
}