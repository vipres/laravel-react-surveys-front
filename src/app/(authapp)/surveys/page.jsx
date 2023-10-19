"use client"
import PageComponent from "@/app/components/PageComponent";
import Survey from "@/app/components/Survey";
import TButton from "@/app/components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";





const Surveys = () => {

    return (
        <PageComponent title="Surveys" buttons={(
            <TButton color="green" href="/surveys/create">
                <PlusCircleIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                Create New
            </TButton>
        )}>
            <Survey />
        </PageComponent>
     );
}

export default Surveys;
