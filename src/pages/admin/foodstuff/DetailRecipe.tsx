import { RecipeBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { AdminWrapper } from '../../../components/Wrapper';
// import { getRecipesById } from '../../../lib/repository/RecipeRepository';

const DetailRecipe: React.FC = () => {
    //API CALL
    // const { data, error, isLoading, isValidating } = getRecipesById();
    return (
        <AdminWrapper>
            <RecipeBreadcrumb pageName="Detail Recipe" />

            <div className="bg-white shadow-default p-6 grid grid-cols-1 gap-9 sm:grid-cols-2">
                <form className="flex flex-col gap-6">
                    <label className="font-medium text-gray-800">Product Name</label>
                    <input type="text" placeholder="Enter Product Name" className="input w-full max-w-md" />

                    <div className="flex justify-end gap-3 mx-12">
                        <button className="btn btn-active">Cancel</button>
                        <button className="btn btn-primary">Add Consignment</button>
                    </div>
                </form>

                <div className="flex flex-col gap-6">



                </div>
            </div>
        </AdminWrapper>

    );
};

export default DetailRecipe;
