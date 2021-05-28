class PeopleController < ApplicationController
before_action :set_family, except: [:all]
before_action :set_person, only: [:show, :update, :destroy]


  def index
    render json: {family: @family, person: @family.people }
  end

  def all
    render json: People.all
  end

  def show
    render json: @person
  end

  def create
    @person = @family.people.new(person_params)
    if(@person.save)
      render json: @person
    else
      render json: @person.errrors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if(@person.update(person_params))
      render json: @person
    else
      render json: @person.errrors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @person.destroy
  end

  private

  def person_params
    params.require(:person).permit(:name)
  end

  def set_family
    @family = Family.find(params[:families_id])

  end

  def set_person
    @person = Person.find(params[:id])
  end

end
