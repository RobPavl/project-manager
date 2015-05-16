class Api::ProjectsController < ApplicationController

  def index
    render json: current_user.projects.to_json
  end

  def create
    @project = current_user.projects.create!(project_params)
    render json: @project.to_json
  end

  def show
    @project = current_user.projects.find params[:id]
    render json: @project.to_json
  end

  def update
    @project = current_user.projects.find params[:id]
    @project.update_attributes(project_params)
    render json: @project.to_json
  end

  def destroy
    @project = current_user.projects.find params[:id]
    render json: @project.delete
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end
end
