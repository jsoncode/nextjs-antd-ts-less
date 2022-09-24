import {NextApiRequest, NextApiResponse} from "next";

interface TestProps {
    id: string;
    name: string;
}

export default function test(
    req: NextApiRequest,
    res: NextApiResponse<TestProps>
) {
    const id: string = (req.query.id || 1).toString();
    res.status(200).json({
        id,
        name: 'test' + id,
    })
}