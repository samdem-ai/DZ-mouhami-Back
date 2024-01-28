import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import ComplexTable from "@/components/table/complex-table"
import PaginationTable from "@/components/table/pagination-table"
import SelectionTable from "@/components/table/selection-table"
import SimpleTable from "@/components/table/simple-table"

interface Props {}
export default function Page({}: Props) {
    return (
        <div className='space-y-8 mb-3'>


            <Card>
                <CardHeader>
                    <CardTitle>users Table</CardTitle>
                </CardHeader>
                <CardContent>
                    <SelectionTable />
                </CardContent>
            </Card>


        </div>
    )
}
