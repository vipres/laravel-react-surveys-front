import { PlusIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import QuestionEditor from "./QuestionEditor";

const SurveyQuestions = ({survey, onSurveyUpdate}) => {
    const [model, setModel] = useState({...survey});

    const addQuestion = () => {
        setModel({
            ...model,
            questions: [...model.questions,
                {
                    id: uuidv4(),
                    question: "",
                    type: "text",
                    description: "",
                    data: {},
                }]
        })
    }

    const questionChange = (question) => {
        if(!question) return
        const newQuestions = model.questions.map((q) => {
            if(q.id === question.id) {
                return {...question}
            }
            return q;
        })
        setModel({...model, questions: newQuestions});
    }

    const deleteQuestion = (question) => {
        if(!question) return
        const newQuestions = model.questions.filter((q) => q.id !== question.id)
        setModel({...model, questions: newQuestions});
    }

    useEffect(() => {
        onSurveyUpdate(model);
    }, [model])


    const handleAddQuestion = () => {
        console.log("Add Question");
    }




  return (
    <>
        <div className="flex justify-between">
            <h3 className="text-2xl font-bold">Questions</h3>
            <button
                type="button"
                className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
                onClick= {handleAddQuestion}
                >
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Question
                </button>
                {model.questions.length ? (
                    model.questions.map((question, index) =>(
                        <QuestionEditor
                            key={question.id}
                            index={index}
                            question={question}
                            questionChange={questionChange}
                            addQuestion={addQuestion}
                            deleteQuestion={deleteQuestion}
                        />
                    ))
                    ):(
                        <div className="text-gray-400 text-center py-4">
                            No questions yet. Click on Add Question to add a question.
                        </div>
                )}

        </div>
    </>
  )
}

export default SurveyQuestions
