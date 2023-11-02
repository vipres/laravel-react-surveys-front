import { useEffect, useState } from "react"
import { useStateContext } from "../contexts/ContextProvider"



const QuestionEditor = ({
    index = 0,
    question,
    addQuestion,
    deleteQuestion,
    questionChange,

}) => {
    const [model, setModel] = useState({...question})
    const {questionTypes} = useStateContext()
    useEffect(() => {
        questionChange(model)
    }, [model])

    function upperCaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



  return (
    <div>QuestionEditor</div>
  )
}

export default QuestionEditor
