class PetsController < ApplicationController
before_action :set_family
before_action :set_person, except: [:all]
before_action :set_pet, only: [:show, :update, :destroy]


  def index
    render json: {person: @person, pet: @person.pets}
  end

  # def all
  #   render json: Pet.all
  # end

  def show
    render json: @pet
  end

  def create
    @pet = @person.pets.new(pet_params)
    if(@pet.save)
      render json: @pet
    else
      render json: @pet.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if(@pet.update(pet_params))
      render json: @pet
    else
      render json: @pet.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @pet.destroy
  end

  private

  def pet_params
    params.require(:pet).permit(:name)
  end

  def set_pet
    @pet = Pet.find(params[:id])
  end

  def set_person
    @person = Person.find(params[:person_id])
  end

  def set_family
    @family = Family.find(params[:families_id])
  end
end
