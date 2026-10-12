import { exitChecklist } from "../../../data/exitChecklist"

export default function ExitChecklist() {
   return (<ul>{exitChecklist?.map((cl)=> (<li>{cl}</li>))}</ul>)
}