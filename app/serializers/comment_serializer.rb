class CommentSerializer < ActiveModel::Serializer
  attributes :id, :task_id, :body, :file
  belongs_to :task
end
