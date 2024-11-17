import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { fetchNui } from '../utils/fetchNui';

const confirmReport = () => {
    fetchNui("closeMenu")
}

export const ReportCard = () => {
    return (
        <main className="flex-1 overflow-hidden">

            <div className="p-6 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                </div>
                <Card>
                    <div className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Report</h2>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="Subject of the report" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        className="min-h-[200px]"
                                        id="description"
                                        placeholder="Description of your report"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between mt-6">
                                <Button className="bg-red-600" variant="outline">Cancel</Button>
                                <Button onClick={confirmReport} className="bg-[#45e696] text-black">Submit</Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </main>
    )
}