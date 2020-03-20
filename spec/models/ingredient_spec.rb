require 'rails_helper'

RSpec.describe Ingredient, type: :model do
  context "creating Ingredient is valid " do
    it "with valid attributes" do
      expect(Ingredient.new name: 'Name of ingredient', priority: 2).to be_valid
    end

    it "without a priority (default value)" do
      expect(Ingredient.new name: 'Name of ingredient').to be_valid
    end

    it "and has default priority equal 1" do
      ingredient = Ingredient.new name: 'Name of ingredient'
      ingredient.save
      expect(ingredient.priority).to eq 1
    end
  end

  context "creating Ingredient is not valid " do
    it "without any attributes" do
      expect(Ingredient.new).not_to be_valid
    end

    it "without a name" do
      expect(Ingredient.new priority: 2).not_to be_valid
    end

    it "with a short name" do
      expect(Ingredient.new name: 'NI', priority: 2).not_to be_valid
    end

    it "with a long name" do
      expect(Ingredient.new name: 'Very very very very very very very very long name of ingredient', priority: 2)
          .not_to be_valid
    end

    it "with exists name" do
      ingredient = Ingredient.new name: 'Name of ingredient', priority: 1
      ingredient.save
      expect(Ingredient.new name: 'Name of ingredient', priority: 3).not_to be_valid
    end

    it "with zero priority" do
      expect(Ingredient.new name: 'Name of ingredient', priority: 0).not_to be_valid
    end

    it "with not positive priority" do
      expect(Ingredient.new name: 'Name of ingredient', priority: -1).not_to be_valid
    end

    it "with not integer priority" do
      expect(Ingredient.new name: 'Name of ingredient', priority: 1.5).not_to be_valid
    end
  end
end
