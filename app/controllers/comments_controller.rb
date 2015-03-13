class CommentsController < ApplicationController
  def index
    render json: current_user.projects.where(id: params[:project_id]).first.tasks.where(id: params[:task_id]).first.comments.to_json
  end

  def create
    @comment = current_user.projects.where(id: params[:project_id]).first.tasks.where(id: params[:task_id]).first.comments.create!(comment_params)
    render json: @comment.to_json
  end

  def update
    @comment = current_user.projects.where(id: params[:project_id]).first.tasks.where(id: params[:task_id]).first.comments.find(params[:id])
    @comment.update_attributes(comment_params)
    render json: @comment.to_json
  end

  def show
    @comment = current_user.projects.where(id: params[:project_id]).first.tasks.where(id: params[:task_id]).first.comments.find(params[:id])
    render json: @comment.to_json
  end

  def destroy
    @comment = current_user.projects.where(id: params[:project_id]).first.tasks.where(id: params[:task_id]).first.comments.find(params[:id])
    render json: @comment.delete
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :file)
  end
end