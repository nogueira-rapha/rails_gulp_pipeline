module ApplicationHelper
  def asset_image_path(filename)
    "/assets/#{REV_MANIFEST["images/#{filename}"]}"
  end
end
