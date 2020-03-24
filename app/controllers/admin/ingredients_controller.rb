module Admin
  class IngredientsController < ApplicationController

    def index
      @ingredients = Ingredient.all.order('priority', 'name')
    end

    def show
      @ingredient = Ingredient.find(params[:id])
    end

    def create

    end

    def new
      @ingredient = Ingredient.new
    end

    def edit

    end

    def update

    end

    def destroy

    end

  end
end
