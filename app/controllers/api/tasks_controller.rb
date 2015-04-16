class TasksController < ApplicationController
  def index
    render json: current_user.projects.where(id: params[:project_id]).first.tasks.to_json
  end

  def create
    @task = current_user.projects.where(id: params[:project_id]).first.tasks.create!(task_params)
    render json: @task.to_json
  end

  def show
    @task = current_user.projects.where(id: params[:project_id]).first.tasks.find_by params[:id]
    render json: @task.to_json
  end

  def destroy
    @task = current_user.projects.where(id: params[:project_id]).first.tasks.find(params[:id])
    render json: @task.delete
  end

  def update
    @task= current_user.projects.where(id: params[:project_id]).first.tasks.find(params[:id])
    @task.update_attributes(task_params)
    render json: @task.to_json
  end

  private

  def task_params
    params.require(:task).permit(:body, :is_checked, :priority, :deadline)
  end
end