class TaskSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :is_checked, :body, :priority, :deadline
  has_many :comments
end
