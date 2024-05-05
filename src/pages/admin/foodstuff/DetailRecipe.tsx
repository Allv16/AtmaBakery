import { RecipeBreadcrumb } from '../../../components/Breadcrumbs/Breadcrumb';
import { RecipeForm } from '../../../components/Form/Form';
import { AdminWrapper } from '../../../components/Wrapper';
// import RecipeForm from '../../../components/RecipeForm';
// import { getRecipesById } from '../../../lib/repository/RecipeRepository';
import { getAllIngredients } from "../../../lib/repository/IngredientsRepository";

const DetailRecipe: React.FC = () => {
    //API CALL
    const { data, error, isLoading } = getAllIngredients();

    return (
        <>
            <AdminWrapper>
                <RecipeBreadcrumb pageName="Detail Recipe" />
                {isLoading && (
                    <div className="w-full mt-64 flex justify-center items-center">
                        <span className="loading loading-dots loading-md"></span>
                    </div>
                )}
                {error && <div>Error</div>}
                {data && (
                    <RecipeForm ingredientsData={data} />
                )}
            </AdminWrapper>
        </>
    );
};

export default DetailRecipe;
