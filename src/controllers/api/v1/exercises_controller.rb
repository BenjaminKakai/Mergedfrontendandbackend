class Api::V1::ExercisesController < ApplicationController
  def index
    # Retrieve exercises from the database and order them by creation date
    exercises = Exercise.all.order(created_at: :desc)
    render json: exercises
  end

  def create
    # Create a new exercise using the provided parameters
    exercise = Exercise.create!(exercise_params)
    # Render the created exercise as JSON
    if exercise
      render json: exercise
    else
      # Render errors if the exercise creation fails
      render json: exercise.errors
    end
  end

  def show
    # Show method logic here
  end

  def destroy
    # Destroy method logic here
  end

  private

  # Strong params to permit only specified attributes for exercise creation
  def exercise_params
    params.permit(:name, :image, :trainings, :instruction)
  end
end
