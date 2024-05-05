import { useParams } from "react-router-dom";
import { RecipeBreadcrumb } from "../../../components/Breadcrumbs/Breadcrumb";
import { RecipeForm } from "../../../components/Form/Form";
import { AdminWrapper } from "../../../components/Wrapper";
// import RecipeForm from '../../../components/RecipeForm';
// import { getRecipesById } from '../../../lib/repository/RecipeRepository';
import { getAllIngredients } from "../../../lib/repository/IngredientsRepository";
import { getRecipesById } from "../../../lib/repository/RecipeRepository";
import { IIngredients } from "../../../lib/interfaces/IIngredients";
import { getProductsById } from "../../../lib/repository/ProductRepository";

const DetailRecipe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  //API CALL
  const {
    data: productData,
    error: productError,
    isLoading: prodcutIsLoading,
  } = getProductsById(id!);
  const { data, error, isLoading } = getAllIngredients();
  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeIsLoading,
  } = getRecipesById(id!);

  let recipeList: IIngredients[] = [];
  let remainingIngredients: IIngredients[] = data;

  if (recipeData) {
    recipeList = recipeData.recipe.map(
      (recipe: any) => recipe.bahan_baku
    ) as IIngredients[];
  }
  console.log(data);

  if (data && recipeData) {
    remainingIngredients = data.filter(
      (ingredient) =>
        !recipeList.some(
          (recipe) => recipe.id_bahan_baku === ingredient.id_bahan_baku
        )
    );
  }

  console.log(remainingIngredients);

  return (
    <>
      <AdminWrapper>
        <RecipeBreadcrumb pageName="Detail Recipe" />
        <p>For Product:</p>
        <h1 className="text-3xl font-serif font-bold text-primary pb-4">
          {!prodcutIsLoading && productData.nama_produk}
        </h1>
        {isLoading && (
          <div className="w-full mt-64 flex justify-center items-center">
            <span className="loading loading-dots loading-md"></span>
          </div>
        )}
        {error && <div>Error</div>}
        {!isLoading && !recipeIsLoading && (
          <RecipeForm
            ingredientsData={remainingIngredients}
            recipeData={recipeList}
          />
        )}
      </AdminWrapper>
    </>
  );
};

export default DetailRecipe;
