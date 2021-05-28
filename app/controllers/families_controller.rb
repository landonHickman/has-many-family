class FamiliesController < ApplicationController
  before_action :set_family, only: [:update, :destroy, :show]
  
  def main
    render component: "Main"
  end

  def index
    render json: Family.all
  end

  def show
    render json: {family: @family, person: @family.people}
  end

  def create
   @family = Family.new(family_params)
   if(@family.save)
    render json: @family
   else
    render json: @family.errors.full_messages, status: :unprocessable_entity
   end
  end

  def update
    if(@family.update(family_params))
      render json: @family
    else
      render json: @family.errors.full_massages, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @family.destroy
  end

  private

  def family_params
    params.require(:family).permit(:name)
  end

  def set_family
    @family = Family.find(params[:id])
  end 
end
