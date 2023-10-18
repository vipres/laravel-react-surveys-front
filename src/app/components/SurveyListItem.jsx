import { ArrowTopRightOnSquareIcon, PencilIcon, TrashIcon } from "@heroicons/react/20/solid"
import Image from "next/image"


const SurveyListItem = ({survey, onDeleteClick}) => {
  return (
    <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-h-[470px]">
        <Image className="w-full h-48 object-cover" src={survey.image_url} alt={survey.title} width={300} height={200}/>
        <h4 className="mt-4 text-lg font-bold">{survey.title}</h4>
        <div
        dangerouslySetInnerHTML={{ __html: survey.description }}
        className="overflow-hidden flex-1"
        ></div>
        <div className="flex justify-between items-center mt-3">
            <TButton to={`surveys/${survey.id}`}>
                <PencilIcon className="h-5 w-5 mr-2" />
                Edit
            </TButton>
            <div className="flex items-center">
                <TButton href={`/view/survey/${survey.slug}`} circle link>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </TButton>

                {survey.id && (
                    <TButton onClick={onDeleteClick} circle link color="red">
                        <TrashIcon className="h-5 w-5" />
                    </TButton>
                )}
            </div>
        </div>

    </div>
  )
}

export default SurveyListItem
