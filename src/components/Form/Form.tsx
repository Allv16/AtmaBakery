import React, { useEffect, useState } from "react";
import { IIngredients } from "../../lib/interfaces/IIngredients";
import { IRecipe } from "../../lib/interfaces/IRecipe";
import { Trash2 } from "lucide-react";
import { editRecipes } from "../../lib/repository/RecipeRepository";
import { toast } from "sonner";

type IngredientsListProps = {
  ingredientsData: IIngredients[];
  recipeData: IIngredients[];
  idProduk: string;
};

export const RecipeForm: React.FC<IngredientsListProps> = (
  props: IngredientsListProps
) => {
  const [recipeData, setRecipeData] = useState(props.recipeData);

  const [values, setValues] = useState<any[]>([]);

  const [ingredientsData, setIngredientsData] = useState(props.ingredientsData);

  const addRecipe = (item: IIngredients) => {
    item.stok = 0;
    setRecipeData((prevValues) => [item, ...prevValues]);
    setIngredientsData((prevValues) =>
      prevValues.filter(
        (ingredient) => ingredient.id_bahan_baku !== item.id_bahan_baku
      )
    );
  };

  useEffect(() => {
    setValues(
      recipeData.map((recipe) => ({
        jumlah_bahan: recipe.stok ? recipe.stok.toString() : "",
        id_bahan_baku: recipe.id_bahan_baku,
      }))
    );
  }, [recipeData]);

  const removeRecipe = (item: IIngredients) => {
    setIngredientsData((prevValues) => [item, ...prevValues]);
    setRecipeData((prevValues) =>
      prevValues.filter(
        (ingredient) => ingredient.id_bahan_baku !== item.id_bahan_baku
      )
    );
  };

  const handleOnClick = async () => {
    toast.info("Updating Recipe");
    console.log(values);

    await editRecipes(props.idProduk, values);
  };
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
      <div className="flex flex-col gap-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke py-4 px-7 flex justify-between items-center">
            <h3 className="font-medium text-black">Recipe</h3>
            <button
              className={`btn btn-sm btn-primary`}
              onClick={handleOnClick}
            >
              Edit Recipe
            </button>
          </div>
          {recipeData.length === 0 && (
            <div className="p-7 py-4">
              <h3 className="text-black text-center">No Recipe Added Yet</h3>
            </div>
          )}
          {recipeData.map((recipe, index) => (
            <div className="px-7 py-4">
              <div className="flex flex-col gap-1 xl:flex-row">
                <div className="w-full ">
                  <label className="mb-3 block text-black">
                    {recipe.nama_bahan_baku}
                  </label>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        placeholder="Enter quantity"
                        className="w-full rounded border-[2px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                        min="0"
                        value={values[index]?.jumlah_bahan}
                        onChange={(e) => {
                          const newValues = [...values];
                          newValues[index].jumlah_bahan = e.target.value;
                          setValues(newValues);
                        }}
                      />
                      <p className="font-bold">{recipe.satuan}</p>
                    </div>
                    <button
                      className="btn btn-error"
                      onClick={() => removeRecipe(recipe)}
                    >
                      <Trash2 className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke py-4 px-7">
            <h3 className="font-medium text-black">Ingredients List</h3>
          </div>
          <form action="#">
            <div className="p-7 py-4">
              <ul className="divide-y divide-gray-200">
                {ingredientsData.map((ingredient) => (
                  <li key={ingredient.id_bahan_baku} className="py-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-medium">
                          {ingredient.nama_bahan_baku}
                        </h4>
                      </div>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          addRecipe(ingredient);
                        }}
                      >
                        Add To Recipe
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
